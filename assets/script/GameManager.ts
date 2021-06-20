
import { _decorator, Component, Node, Prefab, instantiate, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property({type:Prefab})
    private background: Prefab = null;
    
    onLoad(): void{  //资源加载完毕,创建棋盘
        console.log("onLoad")  // TODO lyl delete
    }

    onEnable(){
        console.log("enable")
    }

    start () {
        // [3]
        console.log("start")

        let cur_scene = director.getScene();  // 通过预制体动态创建棋盘
        let background = instantiate(this.background);
        cur_scene.addChild(background);
        background.setPosition(0, 0, 0);

        setTimeout(function(){
            console.log("settimeout");
            cur_scene.removeChild(background);
            background.destroy();
        }.bind(this), 5000);
    }

    update(deltaTime: number){
        if (this.background.isValid) {
            console.info(this.background.isValid);
          }
        else{
            console.info("game_over");
        }
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */


// TODO lyl 新增场景，动态加载场景