
import {appRouter} from '@/router/router';



const app = {
    state: {
        baseUrl:'https://www.leinhome.com',
        imgBaseUrl:'http://47.98.145.11',
		appRouter:appRouter[0],
		loading:false,
		showText:false,
		progress:'0%',
		openId:'199',
		nickname:'test',
		imgUrl:'http://s1.dwstatic.com/group1/M00/5C/6D/4c4153c46f57b3103f38ece07d1c1ab6.gif'
    },
    mutations: {
        setTagsList (state, list) {
            state.tagsList.push(...list);
        }
    }
};

export default app;
