import { _decorator, Component, Node, input, Input, EventKeyboard, KeyCode, Label, TERRAIN_HEIGHT_BASE } from "cc";
import { scoreBoard } from "./scoreBoard";
const { ccclass, property } = _decorator;

@ccclass("users")
export class users extends Component {
    @property({ type: Node })
    sibling: Node = null;

    @property({ type: Node })
    label: Node = null;

    @property({ type: Node })
    scoreB: Node = null;

    start() {
        this.node.on(Input.EventType.MOUSE_DOWN, this.onKeyDown, this);

        console.log("Inside duck jump");
    }
    onKeyDown() {
        this.node.parent.parent.active = false;
        this.sibling.active = true;
        console.log(this.label.getComponent(Label).string);
    }

    update(deltaTime: number) {}
}
