import React, { memo } from 'react';
import { Defs, LinearGradient, Path, RadialGradient, Stop, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';
import { useFillIds } from '@/hooks/useFillId';

import { TITLE } from '../style';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  const [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A] =
    useFillIds(TITLE, 27);
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path d="M15.271 16.555l5.72 4.877s-3.276 3.125-7.223-2.866l1.503-2.01z" fill={a.fill} />
      <Path d="M15.4 16.523l4.596 5.947s-3.85 2.39-6.477-4.293l1.882-1.654z" fill={b.fill} />
      <Path
        d="M13.833 21.043h-3.72a.44.44 0 01-.41-.27L2.024 2.94c-.087-.194.065-.421.28-.421H6.07c.184 0 .346.108.41.27l7.635 17.831c.076.205-.065.422-.281.422z"
        fill={c.fill}
      />
      <Path
        d="M7.637 3.547c-2.087.562-2.855 2.465-2.855 2.465s1.33-.465 3.18-.876a30.14 30.14 0 012.551-.421c-.043-.617-1.276-1.6-2.876-1.168z"
        fill={d.fill}
      />
      <Path
        d="M6.664 5.05c-1.644 1.416-1.6 3.46-1.6 3.46s.94-.908 2.357-2.163c.951-.843 2.032-1.6 2.032-1.6-.335-.519-1.47-.833-2.79.303z"
        fill={e.fill}
      />
      <Path
        d="M6.307 7.18c-1.363 1.665-1.05 3.385-1.05 3.385s.801-.768 2.001-2.217a31.1 31.1 0 011.763-1.892C8.61 6 7.388 5.872 6.307 7.18z"
        fill={f.fill}
      />
      <Path
        d="M14.957 4.141s-.41-1.07-1.254-1.535c-.822-.454-3.028-.552-4.585.616-2.065 1.536-2.768 4.044-2.92 4.64-1.492 5.795 1.558 9.06 4.942 10.64l3.817-14.36z"
        fill={g.fill}
      />
      <Path
        d="M4.912 11.246a7.404 7.404 0 007.558 7.245l-.313-14.814c-4.088.097-7.332 3.481-7.245 7.569z"
        fill={h.fill}
      />
      <Path
        d="M6.296 12.62c.443 4.032 4.087 6.941 8.12 6.498l-1.621-14.62a7.366 7.366 0 00-6.499 8.121z"
        fill={i.fill}
      />
      <Path
        d="M9.313 3.785a3.107 3.107 0 00-.097 4.195 3.126 3.126 0 004.174.487L9.313 3.785z"
        fill={j.fill}
      />
      <Path d="M11.79 8.077a2.909 2.909 0 100-5.817 2.909 2.909 0 000 5.817z" fill={k.fill} />
      <Path
        d="M8.729 13.625c1.016 3.233 4.466 5.039 7.699 4.022L12.751 5.926a6.138 6.138 0 00-4.022 7.699z"
        fill={l.fill}
      />
      <Path
        d="M9.562 12.079a5.306 5.306 0 006.239 4.173L13.725 5.84c-2.866.563-4.736 3.363-4.163 6.24z"
        fill={m.fill}
      />
      <Path
        d="M11.075 2.822s-.648 1.125-.291 2.38c.443 1.556 2.097 1.783 2.8 1.61l1.006-2.108-1.763-2.358-1.752.476z"
        fill={n.fill}
      />
      <Path
        d="M12.903 5.807s-.54.162-.887.81c-.292.541-.205 1.287-.205 1.287l2.195-1.686-1.103-.411z"
        fill={o.fill}
      />
      <Path
        d="M15.325 9.97S13.465 9.948 13 8.218c-.313-1.178.249-1.99.249-1.99l1.211-.356.865 4.098z"
        fill={p.fill}
      />
      <Path
        d="M7.02.757s.4 1.849 2.412 2.595c1.524.562 4.076-.973 4.076-.973s-1.34-.552-3.33-.552C8.686 1.827 7.02.757 7.02.757z"
        fill={q.fill}
      />
      <Path
        d="M16.904 4.671s.238-1.243-.552-2.4c-.605-.887-2.12-1.882-4.93-1.265C9.053 1.525 8.697 0 8.697 0c-.076.39.183 2.92 2.649 2.552 3.027-.454 2.768 2.509 3.838 3.006.887.39 1.72-.887 1.72-.887z"
        fill={r.fill}
      />
      <Path d="M13.757 6.412a1.492 1.492 0 100-2.984 1.492 1.492 0 000 2.984z" fill={s.fill} />
      <Path
        d="M10.059 21.043h3.828a.44.44 0 00.41-.27L21.976 2.94c.087-.194-.065-.421-.28-.421h-3.872a.44.44 0 00-.411.27L9.778 20.62c-.076.205.065.422.281.422z"
        fill={t.fill}
      />
      <Path
        d="M10.059 21.043h3.828a.439.439 0 00.41-.27l6.1-14.144c.086-.195-.065-.422-.282-.422h-3.87a.44.44 0 00-.412.27L9.778 20.621c-.076.205.065.422.281.422z"
        fill={u.fill}
      />
      <Path
        d="M16.071 4.888s.054-1.795-1.806-2.736c-2.595-1.309-4.974 1.795-7.699 0 0 0 .552 2.768 6.11 1.72 1.373-.26 1.979.172 2.281.67.26.421.238.789.238 1.005l.876-.66z"
        fill={v.fill}
      />
      <Path
        d="M15.671 5.223s.14-.973-.67-1.568c-.876-.638-1.58-.508-1.58-.508s.498-.303 1.212-.303c.379 0 .508-.054.508-.054s.054-.173-.184-.444c2.033.898 1.503 2.433 1.503 2.433l-.789.444z"
        fill={w.fill}
      />
      <Path
        d="M16.352 6.856s-.8.746-1.946.356c-.076-.021-.065-.475 0-.767.065-.336.292-.703.476-.93 1.243.108 1.47 1.34 1.47 1.34z"
        fill={x.fill}
      />
      <Path
        d="M16.904 4.596s.616.962.432 2.054c-.216 1.265-1.416 1.86-1.416 1.86s.573-2.206-1.05-2.995c0 0 .336-.368.823-.595.713-.324 1.21-.324 1.21-.324z"
        fill={y.fill}
      />
      <Path d="M13.52 5.504a.724.724 0 100-1.449.724.724 0 000 1.449z" fill={z.fill} />
      <Path
        d="M13.357 5.169c.257 0 .465-.223.465-.498 0-.274-.208-.497-.465-.497s-.465.223-.465.497c0 .275.208.498.465.498z"
        fill={A.fill}
      />
      <Path d="M13.681 4.423a.108.108 0 100-.217.108.108 0 000 .217z" fill="#fff" />
      <Defs>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={a.id}
          x1="14.07"
          x2="20.313"
          y1="18.852"
          y2="20.083"
        >
          <Stop offset=".006" stopColor="#E8096A" />
          <Stop offset="1" stopColor="#00AFFF" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={c.id}
          x1="11.764"
          x2="3.911"
          y1="20.533"
          y2="1.932"
        >
          <Stop stopColor="#412DF5" />
          <Stop offset=".691" stopColor="#0606B6" />
          <Stop offset="1" stopColor="#4B00B4" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={d.id}
          x1="5.23"
          x2="8.449"
          y1="4.866"
          y2="4.518"
        >
          <Stop stopColor="#E60030" />
          <Stop offset="1" stopColor="#690040" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={e.id}
          x1="5.359"
          x2="7.933"
          y1="6.753"
          y2="6.013"
        >
          <Stop stopColor="#FF6500" />
          <Stop offset="1" stopColor="#EE182C" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={f.id}
          x1="5.528"
          x2="8.59"
          y1="8.108"
          y2="8.699"
        >
          <Stop stopColor="#EA4D07" />
          <Stop offset="1" stopColor="#C5171E" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={g.id}
          x1="12.023"
          x2="7.057"
          y1="3.007"
          y2="18.02"
        >
          <Stop stopColor="#0091FF" />
          <Stop offset=".005" stopColor="#0292FC" />
          <Stop offset=".126" stopColor="#37A5C2" />
          <Stop offset=".249" stopColor="#65B58E" />
          <Stop offset=".372" stopColor="#8CC363" />
          <Stop offset=".496" stopColor="#ACCF3F" />
          <Stop offset=".62" stopColor="#C4D823" />
          <Stop offset=".745" stopColor="#D6DE10" />
          <Stop offset=".871" stopColor="#E1E204" />
          <Stop offset="1" stopColor="#E4E300" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={h.id}
          x1="6.803"
          x2="13.616"
          y1="4.807"
          y2="18.4"
        >
          <Stop offset=".006" stopColor="#DE003B" />
          <Stop offset=".241" stopColor="#D976FF" />
          <Stop offset="1" stopColor="#00A4EA" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={l.id}
          x1="11.435"
          x2="12.609"
          y1="7.86"
          y2="16.15"
        >
          <Stop stopColor="#FF9500" />
          <Stop offset="1" stopColor="#F7FF2B" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={m.id}
          x1="15.495"
          x2="10.596"
          y1="13.571"
          y2="8.476"
        >
          <Stop offset=".207" stopColor="#FF8E00" />
          <Stop offset="1" stopColor="#F41B56" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={o.id}
          x1="12.031"
          x2="12.816"
          y1="7.438"
          y2="6.584"
        >
          <Stop stopColor="#FFB41F" />
          <Stop offset="1" stopColor="#F42A56" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={p.id}
          x1="13.472"
          x2="14.931"
          y1="9.574"
          y2="6.928"
        >
          <Stop stopColor="#FFB900" />
          <Stop offset="1" stopColor="#F41880" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={r.id}
          x1="8.686"
          x2="16.938"
          y1="2.816"
          y2="2.816"
        >
          <Stop stopColor="#FF6500" />
          <Stop offset="1" stopColor="#EE182C" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={t.id}
          x1="10.556"
          x2="21.346"
          y1="21.192"
          y2="2.03"
        >
          <Stop stopColor="#008DFF" />
          <Stop offset=".181" stopColor="#331DEA" />
          <Stop offset=".833" stopColor="#39C3FE" />
          <Stop offset="1" stopColor="#60F5A9" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={w.id}
          x1="14.947"
          x2="15.001"
          y1="2.631"
          y2="4.948"
        >
          <Stop stopColor="#E60030" />
          <Stop offset="1" stopColor="#690040" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={x.id}
          x1="15.335"
          x2="15.426"
          y1="7.144"
          y2="5.699"
        >
          <Stop stopColor="#FFD71F" />
          <Stop offset="1" stopColor="#DD001B" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={y.id}
          x1="15.25"
          x2="17.127"
          y1="6.472"
          y2="6.603"
        >
          <Stop offset="0" stopColor="#FF4C00" />
          <Stop offset="1" stopColor="#FFFF1E" />
        </LinearGradient>
        <RadialGradient
          cx="0"
          cy="0"
          gradientTransform="rotate(5.75 -186.105 166.894) scale(6.42878)"
          gradientUnits="userSpaceOnUse"
          id={b.id}
          r="1"
        >
          <Stop stopColor="#00CAFF" />
          <Stop offset="1" stopColor="#38E700" />
        </RadialGradient>
        <RadialGradient
          cx="0"
          cy="0"
          gradientTransform="rotate(-6.338 87.254 -95.948) scale(11.4818)"
          gradientUnits="userSpaceOnUse"
          id={i.id}
          r="1"
        >
          <Stop stopColor="#00DFFF" />
          <Stop offset="1" stopColor="#ABE700" />
        </RadialGradient>
        <RadialGradient
          cx="0"
          cy="0"
          gradientTransform="rotate(-40.957 13.589 -11.156) scale(2.76891)"
          gradientUnits="userSpaceOnUse"
          id={j.id}
          r="1"
        >
          <Stop stopColor="#0068FF" />
          <Stop offset="1" stopColor="#9CE830" />
        </RadialGradient>
        <RadialGradient
          cx="0"
          cy="0"
          gradientTransform="translate(11.79 5.169) scale(2.91494)"
          gradientUnits="userSpaceOnUse"
          id={k.id}
          r="1"
        >
          <Stop stopColor="#008A43" />
          <Stop offset="1" stopColor="#A3E830" />
        </RadialGradient>
        <RadialGradient
          cx="0"
          cy="0"
          gradientTransform="translate(13.404 4.87) scale(2.39805)"
          gradientUnits="userSpaceOnUse"
          id={n.id}
          r="1"
        >
          <Stop stopColor="red" />
          <Stop offset="1" stopColor="#FF0" />
        </RadialGradient>
        <RadialGradient
          cx="0"
          cy="0"
          gradientTransform="rotate(-9.492 18.79 -57.53) scale(3.31553)"
          gradientUnits="userSpaceOnUse"
          id={q.id}
          r="1"
        >
          <Stop offset=".001" stopColor="#72003F" />
          <Stop offset="1" stopColor="#CA1D67" />
        </RadialGradient>
        <RadialGradient
          cx="0"
          cy="0"
          gradientTransform="translate(13.777 4.91) scale(1.18046)"
          gradientUnits="userSpaceOnUse"
          id={s.id}
          r="1"
        >
          <Stop offset="0" stopColor="#D1DEE7" />
          <Stop offset="1" stopColor="#fff" />
        </RadialGradient>
        <RadialGradient
          cx="0"
          cy="0"
          gradientTransform="rotate(-156.16 9.63 6.572) scale(2.7555 7.64116)"
          gradientUnits="userSpaceOnUse"
          id={u.id}
          r="1"
        >
          <Stop offset=".001" stopColor="#7F06FB" />
          <Stop offset="1" stopColor="#7A10FB" stopOpacity="0" />
        </RadialGradient>
        <RadialGradient
          cx="0"
          cy="0"
          gradientTransform="translate(7.1 2.821) scale(8.64049)"
          gradientUnits="userSpaceOnUse"
          id={v.id}
          r="1"
        >
          <Stop offset=".001" stopColor="#FF0042" />
          <Stop offset=".422" stopColor="#0068FF" />
          <Stop offset=".659" stopColor="#1877E2" />
          <Stop offset="1" stopColor="#4EEFBE" />
        </RadialGradient>
        <RadialGradient
          cx="0"
          cy="0"
          gradientTransform="matrix(.9051 0 0 .9051 13.173 4.8)"
          gradientUnits="userSpaceOnUse"
          id={z.id}
          r="1"
        >
          <Stop stopColor="#FF9100" />
          <Stop offset=".226" stopColor="#FF9500" />
          <Stop offset=".443" stopColor="#FEA000" />
          <Stop offset=".657" stopColor="#FCB400" />
          <Stop offset=".867" stopColor="#F9CF00" />
          <Stop offset="1" stopColor="#F7E400" />
        </RadialGradient>
        <RadialGradient
          cx="0"
          cy="0"
          gradientTransform="matrix(.97336 0 0 .97336 13.13 4.64)"
          gradientUnits="userSpaceOnUse"
          id={A.id}
          r="1"
        >
          <Stop />
          <Stop offset=".092" stopColor="#000004" />
          <Stop offset=".177" stopColor="#01000F" />
          <Stop offset=".258" stopColor="#020021" />
          <Stop offset=".338" stopColor="#03003C" />
          <Stop offset=".417" stopColor="#05005D" />
          <Stop offset=".494" stopColor="#080087" />
          <Stop offset=".571" stopColor="#0A00B8" />
          <Stop offset=".645" stopColor="#0E00F0" />
          <Stop offset=".654" stopColor="#0E00F7" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
});

Icon.displayName = 'CogViewColor';

export default Icon;
