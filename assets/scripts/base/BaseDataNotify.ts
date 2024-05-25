import { BaseData } from "./BaseData";
import { Singleton } from "./Singleton";

// export abstract class BaseDataNotify extends Singleton<BaseDataNotify>()
// {
//     public RemoveAllDataListenner()
//     {
//         var props = Object.keys(this);
//         props.forEach((prop)=>
//         {
//             let str = prop.toString();
//             this[str].RemoveAllListenner();
//         });
//     }
//     public RemoveAllDataListennerByTarget(_target : any)
//     {
//         var props = Object.keys(this);
//         props.forEach((prop)=>
//         {
//             let str = prop.toString();
//             this[str].RemoveListennerByTarget(_target);
//         });
//     }

//     public Clear()
//     {
//         var props = Object.keys(this);
//         props.forEach((prop)=>
//         {
//             let str = prop.toString();
//             this[str].Clear();
//         });
//     }

//     protected abstract ResetInstance();
// }