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
        d="M20 4.32344ZM8.16 13.36L10.4733 12.9596L18.0015 19.9998V0H15.6214V14.667L11.2174 10.5599L6.54032 11.5204L8.16 13.36ZM9.97398 6.61342L7.46751 7.04028L0 0V19.9998H2.38017V5.33283L6.72438 9.4399L11.283 8.50689L9.97398 6.61342ZM51.4002"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

export default LogoSvg;
