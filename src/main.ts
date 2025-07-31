import { Plugin } from 'obsidian';
import { MemoryLaneNBackView, VIEW_TYPE_MEMORY_LANE_N_BACK } from './MemoryLaneNBackView';

export default class MemoryLaneNBackPlugin extends Plugin {
	async onload() {
		this.registerView(
			VIEW_TYPE_MEMORY_LANE_N_BACK,
			(leaf) => new MemoryLaneNBackView(leaf)
		);

		this.addCommand({
			id: 'open-memory-lane-n-back',
			name: 'Open MemoryLaneNBack',
			callback: () => {
				this.activateView();
			}
		});
	}

	onunload() {
		// Clean up resources
	}

	async activateView() {
		const { workspace } = this.app;

		let leaf = workspace.getLeavesOfType(VIEW_TYPE_MEMORY_LANE_N_BACK)[0];
		if (!leaf) {
			leaf = workspace.getLeaf('tab');
			await leaf.setViewState({
				type: VIEW_TYPE_MEMORY_LANE_N_BACK,
				active: true,
			});
		}

		workspace.revealLeaf(leaf);
	}
}