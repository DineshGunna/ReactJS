import React,{Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class NavigationBar extends Component{

render(){

return( <div>
<Navbar bg="dark" variant="dark" >
<Link to={""} className="navbar-brand">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAulBMVEX////H3/EfISvzfph4otL+/e/xW2w0P1IqLDagoaVBQ0vn5+mHiI0mJzFrbW5SU1dfYWhRLjpHTVqcnJk3OUFtbnWztLc+P0i6u75EKzeVQVAkIy7bdIyZV2qyYXcpJTEvN0hRaYqErNe51evZVGS5urLq6t/z8uXZ2M94eX/DxLtuk77NUmHGaoB5SFk2Kza7TFtbPEqjtsZmcX9hgaenx+WVuN1bMj5wN0SvSFdBUmunqKzd3d/Mzc8EKoPlAAADd0lEQVR4nO3da1PaQBSHcVjCvVEErdxUKNJiEa1o7+33/1rNQmXSEOJpd89pTub/vJf4m02WcGYIpRJCCCGEEEIIIYQQQgghhPJQu9lpNYz3Gq2z16KMG/+GXed9MUefYS3ivRJyNHkZYpL+5liD4W1tW8Vnq7uRfXWJs6ttz6vRsLbLKySi3Eevfy4Asdf56EONDVJZ2TXh37vaduVj6+EfUrmLjnDGDrFX+qDGCllFh2ixQzrJBfEPqUSHaLBDWtFRbmOMkxMWiGGH2D0rvh7GKIUYQAABBBBAAAFkH6L2FiUJybhpHF883F+5f+5N5mnSQoaMtx9aefIwaaFCLhnWIp7zfIIIueBleJAkIekX++XmWJPpMthW9ths/RjaV3c8u5KQ1O13vDmvpsEun5Co9alxnrSQIHZ8YJ4CNkh5bdfEbe+iQMajP9fDP6T8aFwnLRSIvdInAStkbVwnLRTIQ3JB/ENmxnXSQoHYoecyxqjXvUPK9v9gh9g9K74exiiFGEAAAQQQQAABZB+i9hYlCUm7aexmfIrd1VUAoThMxkrmCBIQejMrCCQIPuYJknaxUyHBpxxB0rZfMuTA6aUQEgTdlN1LJST973MGqWduv4DIQwpzagECCCMk9YKvA/L/IIU5tQABBJBCQ/6mHENI46Dn8vzByjVAAAEEEEAAAQQQQAABBBBAAAEEEEAAAaQAkOvh50Hm99p0QK6/vPgdQxWQr4TvGKqAUFIDCY/mb6sH0gQ5OoRQBullORRBMtdDESR8t//PH2u82NMWRCVknn1m6Tm1Du672iApl4g+iP0m+aIIkE7sXSR5gau62O3D9FpFgLRHL76x6zi1Ng+cDN8XALJ5BGiYuSY6IL8fytrqLQ7uwkogtMfkaoCQHlysAlJq31CGD8tpfRJSVu9fc4cQHu4dLL9xGrxBMrMHeWJdC0GIQPxPzn4+Utakxam5ffXv7A7SpMUpe5PX4XeQJi0uLezL/5CC8K1HtSe0IORJi0tNKQhl0uLSTynInO/MqtqP220pCM++u82+10o4SJMWFRDKpMUlsVOLOmnJ/cVOnbS4JLL9UiYtLtk3xGMJCGXS4pLYLQpl0uKU1E0jZdLilNRtfEniB4lMKPMzUdw/ERV1KgKhTFp0QNh+Rm3nkPsFMoQQQgghhBBCCCGEEEIIpfYLAg3INj3Jq3YAAAAASUVORK5CYII=" height="25" width="25" alt="BookIcon" />
 BookStore
 </Link>
<Nav className="mr-auto">
      <Link to={"/add"} className="nav-link">AddBook</Link>
      <Link to={"/list"} className="nav-link">BookList</Link>
      <Link to={"/user"} className="nav-link">UserList</Link>

    </Nav>
</Navbar>
</div> );

}


}

