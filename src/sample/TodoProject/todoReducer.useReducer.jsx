

// tasks 는 최초 호출시 기본값이다.
//디스패치에 들어같던 객체가 넘어온다. actions : add 인지 체인지인지 , 딜리트 인지를 알려만 주는 변수
export const todoReducer=(tasks,actions)=>{ 

    
    switch(actions.type){
        case 'add':{
            return [
                ...tasks,
                {
                    id:actions.id,
                    text:actions.text,
                    done:false

                }
            ]
        }

        case 'change':{
            return  tasks.map((t) =>( t.id === actions.task.id? actions.task :t ))
        }

        case 'delete':{
            return   tasks.filter((t) => t.id !== actions.id);
        }

    }

};