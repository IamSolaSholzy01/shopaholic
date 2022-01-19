import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
// material
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

// const Page = forwardRef(({ children, title = '', ...other }, ref) => (
  // <Box ref={ref} {...other}>
  //   <Helmet>
  //     <title>{title}</title>
  //   </Helmet>
  //   {children}
  // </Box>
// ));

// Page.propTypes = {
//   children: PropTypes.node.isRequired,
//   title: PropTypes.string
// };

interface IPageProps {
  title: string
}

interface IPageState { }

class Page extends Component<IPageProps, IPageState> {
  private ref: React.Ref<HTMLElement>;

  constructor(props: IPageProps) {
    super(props);
    this.ref = React.createRef();
  }

  render() {
    const { children, title, ...other } = this.props;

    return (
      <Box ref={this.ref} {...other}>
        {children}
      </Box>
    )
  }
}

export default Page;
