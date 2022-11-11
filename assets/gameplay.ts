import { _decorator, Component, Node, Prefab, instantiate, macro, TERRAIN_HEIGHT_BASE, input, Input, Label } from "cc";
import { HurdleMove } from "./HurdleMove";
const { ccclass, property } = _decorator;

@ccclass("gameplay")
export class gameplay extends Component {
    _dinp: any = null;
    _count: number = 0;

    @property ({type : Node})
    siblingScroll : Node = null;
    
    @property({ type: Prefab })
    Hurdle: Prefab = null;
    @property({ type: Node })
    score: Node = null;
    @property({ type: Node })
    duck: Node = null;
    onLoad() {
        //input.on(Input.EventType.KEY_DOWN, this.onSpace, this);
    }
    start() {
        console.log("Inside Game Play");
        this.schedule(
            () => {
                let hurdle = instantiate(this.Hurdle);

                hurdle.getComponent(HurdleMove).setUpHurdle(this.duck, this.siblingScroll);

                this.node.addChild(hurdle);
                ++this._count;
                let labCount = this.score.getComponent(Label);
                labCount.string = `Score : ${this._count}`;
                console.log("Count = ", +this._count);
            },
            2,
            macro.REPEAT_FOREVER,
            0
        );
    }
    update(deltaTime: number) {}
}
