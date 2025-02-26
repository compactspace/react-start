

// 사실 props라 적어도 된다. 그냥 바로 구조분해로 받아 본것이다.
export const ChildComponent = ({title,content})=>{



    return (

        <div className="card">
            <div>
                <h2>{title}</h2>
                <p>{content}</p>
                <button>
                    Learn More
                </button>
            </div>
        </div>

    );
}