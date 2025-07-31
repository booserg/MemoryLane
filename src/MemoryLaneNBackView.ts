import { ItemView, WorkspaceLeaf } from 'obsidian';
import { createApp, h } from 'vue';

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
		
		// Create Vue app with inline component
		const app = createApp({
			render() {
				return h('div', { style: { padding: '20px' } }, [
					h('h1', 'MemoryLane N-Back Game'),
					h('button', {
						onClick: () => {
							console.log('memory-lane-n-back-main-view click');
						},
						style: {
							padding: '12px 24px',
							fontSize: '16px',
							backgroundColor: '#4CAF50',
							color: 'white',
							border: 'none',
							borderRadius: '4px',
							cursor: 'pointer',
							fontWeight: 'bold',
							marginTop: '10px'
						}
					}, 'Memory Lane N-Back')
				]);
			}
		});
		
		app.mount(container);
	}

	async onClose() {
		// Clean up resources
	}
}
