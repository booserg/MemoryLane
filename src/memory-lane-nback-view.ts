import { ItemView, WorkspaceLeaf } from 'obsidian';
import { createApp } from 'vue';
import MainView from './components/MainView.vue';

export const VIEW_TYPE_MEMORY_LANE_N_BACK = 'memory-lane-n-back-main-view';

export class MemoryLaneNBackView extends ItemView {
  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
  }

  getViewType(): string {
    return VIEW_TYPE_MEMORY_LANE_N_BACK;
  }

  getDisplayText(): string {
    return 'MemoryLaneNBack';
  }

  async onOpen(): Promise<void> {
    const container = this.containerEl.children[1];
    container.empty();
    const root = container.createEl('div');
    createApp(MainView).mount(root);
  }

  async onClose(): Promise<void> {}
}
