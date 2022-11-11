import { _decorator, Component, Node, Label } from "cc";
const { ccclass, property } = _decorator;

@ccclass("scoreBoard")
export class scoreBoard extends Component {
    
    //Lable changed dhkhdkfh
    @property({ type: Node })
    nameLabel: Node = null;


    // User score
    @property({type : Node})
    score : Node = null;

    start() {
        console.log("Inside scoreBoard" + this.nameLabel.getComponent(Label).string);
        let content = this.node.getComponent(Label);
        content.string = "Name :   "+this.nameLabel.getComponent(Label).string
        console.log("Final Score =" +this.score.getComponent(Label).string)
        content.string+= "    "+this.score.getComponent(Label).string
    }
    update(deltaTime: number) {
       
        // 
    }
}
