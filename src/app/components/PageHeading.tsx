type IPageHeadingProps = {
    heading: string;
    size: string;
    margin?: number;
};

export default function PageHeading(props: IPageHeadingProps) {
    return (
        <h2
            className={`my-${props.margin} underline decoration-sky-900 underline-offset-8 text-${props.size} font-pacifico`}
        >
            {props.heading}
        </h2>
    );
}
