function PageHeading({ heading }: HeadingProps) {
  return <h1 className="page-heading">{heading}</h1>;
}

interface HeadingProps {
  heading: string;
}

export default PageHeading;
