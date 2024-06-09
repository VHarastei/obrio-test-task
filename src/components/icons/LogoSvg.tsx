import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

function LogoSvg(props: SvgIconProps) {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      {...props}
    >
      <title>Logo</title>
      <path
        d="M20 4.323ZM8.16 13.36l2.313-.4L18.001 20V0h-2.38v14.667l-4.404-4.107-4.677.96 1.62 1.84Zm1.814-6.747-2.506.427L0 0v20h2.38V5.333L6.724 9.44l4.559-.933-1.309-1.894Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

export default LogoSvg;
