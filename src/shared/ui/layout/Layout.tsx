interface PropsI {
  children: React.ReactElement;
}

export function Layout(props: PropsI) {
  const { children } = props;

  return <body>{children}</body>;
}
