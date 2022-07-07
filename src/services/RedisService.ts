import config from '../../constans/config';
import { Client } from 'redis-om';
import { singleton } from "tsyringe";

@singleton()
class RedisService { 
    public redisClient;

    constructor(){
        this.redisClient = new Client();
        this.init();
    }

    async init(){
        await this.redisClient.open(config.redis.client);
        console.log('creacion del cliente exitosa!!');
    }

}

export default RedisService;