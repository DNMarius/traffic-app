export default function Infos2(props) {
    return (
        <div className="flex flex-wrap">
            <div className="FulltimeAndPrivateContainer">
                {props.fullTime == true ? (
                    <span className="flex px-2 items-center py-0.8 content-center rounded-xl mr-4 bg-blue-200 text-blue-700 FullTimeJob">
                        Full Time
                    </span>
                ) : (
                    <></>
                )}
                {props.isprivate == true ? (
                    <span className="flex px-2 items-center py-0.8 content-center rounded-xl mr-4 bg-green-200 text-green-700 PrivateJob">
                        Private
                    </span>
                ) : (
                    <></>
                )}
            </div>
            {props.Urgent == true ? (
                <span className="flex px-2 items-center py-0.8 content-center rounded-xl mr-4 bg-orange-200 text-orange-700 UrgentJob">
                    Urgent
                </span>
            ) : (
                <></>
            )}
        </div>
    );
}
