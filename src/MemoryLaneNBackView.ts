import { ItemView, WorkspaceLeaf } from 'obsidian';

export const VIEW_TYPE_MEMORY_LANE_N_BACK = 'memory-lane-n-back-main-view';

export class MemoryLaneNBackView extends ItemView {
	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	getViewType() {
		return VIEW_TYPE_MEMORY_LANE_N_BACK;
	}

	getDisplayText() {
		return 'MemoryLane N-Back';
	}

	async onOpen() {
		const container = this.containerEl.children[1];
		container.empty();
		container.createEl('h1', { text: 'MemoryLane N-Back Game' });
		container.createEl('p', { text: 'Plugin loaded successfully! Vue.js integration will be added in the next step.' });
	}

	async onClose() {
		// Clean up resources
	}
}