export default function ArticlesContainer(props) {
    return (
        <div className="ArticlesContainer flex flex-wrap gap-8 mx-[10%]">
            {props.children}
        </div>
    );
}