import { App, Plugin, WorkspaceLeaf } from 'obsidian';
import { MemoryLaneNBackView, VIEW_TYPE_MEMORY_LANE_N_BACK } from './memory-lane-nback-view';

export default class MemoryLaneNBackPlugin extends Plugin {
  async onload() {
    this.registerView(
      VIEW_TYPE_MEMORY_LANE_N_BACK,
      (leaf: WorkspaceLeaf) => new MemoryLaneNBackView(leaf)
    );

    this.addCommand({
      id: 'open-memory-lane-n-back',
      name: 'Open MemoryLaneNBack',
      callback: () => this.activateView(),
    });
  }

  onunload() {
    this.app.workspace
      .getLeavesOfType(VIEW_TYPE_MEMORY_LANE_N_BACK)
      .forEach((leaf) => leaf.detach());
  }

  async activateView() {
    this.app.workspace.detachLeavesOfType(VIEW_TYPE_MEMORY_LANE_N_BACK);
    await this.app.workspace.getLeaf(true)!.setViewState({
      type: VIEW_TYPE_MEMORY_LANE_N_BACK,
      active: true,
    });
    this.app.workspace.revealLeaf(
      this.app.workspace.getLeavesOfType(VIEW_TYPE_MEMORY_LANE_N_BACK)[0]!
    );
  }
}
