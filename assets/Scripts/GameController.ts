import { _decorator, Component, Node } from "cc";
import { AudioController } from "./AudioController";
import playableHelper from "./helper/h5-helper";
const { ccclass, property } = _decorator;

@ccclass("GameController")
export class GameController extends Component {
  @property(AudioController)
  public audioController: AudioController = null;

  start() {
    const androidUrl = "your-android-url";
    const iosUrl = "your-ios-url";
    playableHelper.setStoreUrl(iosUrl, androidUrl); // this section only needs for Google and Unity channel
  }

  update(deltaTime: number) {}

  playSfx() {
    this.audioController.playTapSfx();
  }

  redirectToStore() {
    playableHelper.redirect();
  }
}
