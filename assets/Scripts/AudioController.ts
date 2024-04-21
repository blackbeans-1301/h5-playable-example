import { _decorator, AudioSource, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("AudioController")
export class AudioController extends Component {
  @property(AudioSource)
  public sfxSource: AudioSource = null;

  start() {}

  update(deltaTime: number) {}

  playTapSfx() {
    this.sfxSource.playOneShot(this.sfxSource.clip, 1);
  }
}
