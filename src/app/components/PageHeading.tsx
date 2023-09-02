type IPageHeadingProps = {
    heading: string;
};

export default function PageHeadings(props: IPageHeadingProps) {
    return (
        <h2 className=" my-6 underline decoration-sky-900 underline-offset-8 text-3xl font-pacifico">
            {props.heading}
        </h2>
    );
}
