type IPageHeadingProps = {
    heading: string;
    size: string;
    margin: string;
};

export default function PageHeading(props: IPageHeadingProps) {
    return (
        <h2
            className={`${props.margin} ${props.size} underline decoration-sky-900 underline-offset-8 font-pacifico`}
        >
            {props.heading}
        </h2>
    );
}
