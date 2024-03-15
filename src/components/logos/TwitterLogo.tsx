import { SVGProps } from 'react';

export default function TwitterLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="none"
      width="100%"
      height="100%"
      {...props}>
      <path
        fill="currentColor"
        d="M12.6009 0.903908H15.0544L9.69434 7.03008L16 15.3664H11.0627L7.19566 10.3105L2.77087 15.3664H0.31595L6.04904 8.81379L0 0.903908H5.06262L8.55811 5.52524L12.6009 0.903908ZM11.7399 13.8979H13.0993L4.32392 2.29528H2.86506L11.7399 13.8979Z"></path>
    </svg>
  );
}
