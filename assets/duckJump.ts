import { _decorator, Component, Node, input, Input, EventKeyboard, KeyCode, tween, Vec3 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("duckJump")
export class duckJump extends Component {
    _flag: Boolean = false;
    onLoad() {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        console.log("Inside duck jump");
    }
    start() {}
    collision() {
        console.log("Inside collision func");
    }

    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case this._flag == false && KeyCode.SPACE:
                {
                    this._flag = true;
                    //console.log(this.node);
                    tween(this.node)
                        .by(0.7, { position: new Vec3(0, 270, 0) })
                        .by(0.7, { position: new Vec3(0, -270, 0) })
                        .call(() => {
                            this._flag = false;
                        })

                        .start();
                }
                break;
        }
    }
    update(deltaTime: number) {}
}
