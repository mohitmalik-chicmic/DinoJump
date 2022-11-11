import { _decorator, Component, Node, Enum, UITransform, Intersection2D, director } from "cc";
const { ccclass, property } = _decorator;

enum S {
    small = 1,
    medium = 2,
    large = 3,
}

Enum(S);
@ccclass("HurdleMove")
export class HurdleMove extends Component {
    _colide: Boolean = false;

    @property({ type: Node })
    duck: Node = null;

    @property ({type : Node})
    siblingScroll : Node = null;

    start() {
        console.log("Inside HurdleMove");
    }
    setUpHurdle(duck ,siblingScroll) {
        this.siblingScroll = siblingScroll
        this.duck = duck;
        console.log("Hurdle fcuntion called before start");
        let dinoTransform = this.node.getComponent(UITransform);
        let pos = this.node.getPosition();
        let size = Math.floor(Math.random() * 3 + 1);
        // console.log(size);
        switch (size) {
            case S.small:
                {
                    dinoTransform.setContentSize(30, 30);
                    pos.y -= 22;
                    this.node.setPosition(pos);
                }
                break;
            case S.large:
                {
                    dinoTransform.setContentSize(90, 90);
                    pos.y += 10;
                    this.node.setPosition(pos);
                }
                break;
            case S.medium: {
                dinoTransform.setContentSize(50, 50);
            }
        }
    }

    update(deltaTime: number) {
        if (this._colide == false) {
            let pos = this.node.getPosition();
            pos.x += 4;
            this.node.setPosition(pos);
            for (let i = 0; i < this.duck.children.length; i++) {
                for (let j = 0; j < this.node.children.length; j++) {
                    this._colide = Intersection2D.rectRect(
                        this.node.children[j].getComponent(UITransform).getBoundingBoxToWorld(),
                        this.duck.children[i].getComponent(UITransform).getBoundingBoxToWorld()
                    );
                    //console.log(this._colide)
                }
            }
        } else {
            this._colide = true;
            this.siblingScroll.active = true
            
            director.pause();
            return "hieee";
        }
    }
}
