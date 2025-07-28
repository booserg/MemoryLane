import { ItemView, WorkspaceLeaf } from 'obsidian';

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
    container.createEl('div', { text: 'MemoryLaneNBack View' });
  }

  async onClose(): Promise<void> {}
}
