import {Protofy} from 'protolib/base'
import { Pm2Model } from "./pm2";
import { ServiceModel } from "./service";

export default Protofy("objects", {
    pm2: Pm2Model,
    service: ServiceModel
})