import { mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'images');
mkdirSync(outDir, { recursive: true });

/* ------------------------------------------------------------------ */
/* Figure poses (drawn on a 600x800 stage, stroked limbs + head)        */
/* ------------------------------------------------------------------ */

const POSES = {
  leap: {
    head: [340, 200, 36],
    hair: 'flow',
    parts: [
      { d: 'M 335 240 C 330 300 315 345 300 392', w: 58 },
      { d: 'M 338 255 C 405 228 475 180 545 148', w: 26 },
      { d: 'M 325 262 C 250 285 160 305 88 352', w: 26 },
      { d: 'M 305 392 C 375 452 455 502 565 542', w: 36 },
      { d: 'M 295 392 C 220 472 140 545 38 595', w: 36 },
    ],
    fabric: [
      'M 320 250 C 250 300 190 380 150 480 C 210 440 270 400 330 380 C 300 330 305 290 320 250 Z',
      'M 330 270 C 380 330 420 400 430 490 C 390 430 350 380 315 350 Z',
    ],
  },
  hiphop: {
    head: [300, 228, 34],
    hair: 'cap',
    parts: [
      { d: 'M 300 264 C 306 320 312 362 306 402', w: 56 },
      { d: 'M 292 280 C 240 272 208 232 218 178', w: 24 },
      { d: 'M 316 286 C 382 302 432 332 484 320', w: 24 },
      { d: 'M 292 402 C 242 472 202 545 182 622', w: 34 },
      { d: 'M 320 402 C 380 462 422 532 432 622', w: 34 },
    ],
  },
  contemporary: {
    head: [248, 302, 32],
    hair: 'long',
    parts: [
      { d: 'M 272 322 C 322 334 362 372 374 432', w: 52 },
      { d: 'M 276 326 C 230 268 202 200 212 128', w: 24 },
      { d: 'M 288 332 C 344 342 404 364 456 402', w: 22 },
      { d: 'M 374 432 C 364 522 352 605 348 692', w: 34 },
      { d: 'M 368 442 C 444 492 514 532 574 562', w: 32 },
    ],
    fabric: [
      'M 280 330 C 240 400 220 500 235 600 C 275 520 310 460 350 420 C 320 390 295 360 280 330 Z',
    ],
  },
  jazz: {
    head: [310, 212, 33],
    hair: 'bun',
    parts: [
      { d: 'M 310 246 C 310 312 306 362 300 402', w: 54 },
      { d: 'M 300 266 C 255 248 215 232 178 218', w: 24 },
      { d: 'M 320 266 C 368 280 412 296 452 308', w: 24 },
      { d: 'M 296 402 C 290 492 296 562 302 642', w: 32 },
      { d: 'M 312 406 C 362 442 372 502 332 534', w: 30 },
    ],
  },
  ballet: {
    head: [212, 242, 30],
    hair: 'bun',
    parts: [
      { d: 'M 228 270 C 262 292 292 322 312 352', w: 48 },
      { d: 'M 232 282 C 282 252 342 232 404 222', w: 20 },
      { d: 'M 222 276 C 202 232 196 182 212 132', w: 20 },
      { d: 'M 312 352 C 306 452 302 552 300 662', w: 30 },
      { d: 'M 306 356 C 382 342 462 302 532 252', w: 30 },
    ],
    fabric: [
      'M 300 360 C 270 400 255 450 260 505 C 290 460 320 430 350 415 C 330 395 312 378 300 360 Z',
    ],
  },
  bollywood: {
    head: [300, 222, 33],
    hair: 'long',
    parts: [
      { d: 'M 300 256 C 300 316 296 362 290 402', w: 54 },
      { d: 'M 290 272 C 240 242 210 192 220 140', w: 24 },
      { d: 'M 316 276 C 372 262 432 252 482 262', w: 24 },
      { d: 'M 286 402 C 270 492 260 572 254 652', w: 32 },
      { d: 'M 302 406 C 352 472 392 542 402 622', w: 32 },
    ],
    fabric: [
      'M 288 390 C 210 440 150 520 140 620 C 230 560 320 540 420 570 C 390 490 350 430 288 390 Z',
    ],
  },
  heels: {
    head: [320, 222, 32],
    hair: 'long',
    parts: [
      { d: 'M 320 256 C 336 316 352 362 356 402', w: 52 },
      { d: 'M 316 276 C 280 302 274 342 300 372', w: 22 },
      { d: 'M 332 270 C 372 242 392 192 382 142', w: 22 },
      { d: 'M 356 402 C 350 492 346 572 342 652', w: 32 },
      { d: 'M 346 406 C 312 472 302 542 312 642', w: 30 },
    ],
  },
  groupA: {
    head: [300, 240, 30],
    hair: 'short',
    parts: [
      { d: 'M 300 272 C 302 330 300 372 298 410', w: 50 },
      { d: 'M 292 288 C 250 270 220 240 205 205', w: 22 },
      { d: 'M 310 288 C 355 270 390 245 410 210', w: 22 },
      { d: 'M 292 410 C 275 495 265 565 260 640', w: 30 },
      { d: 'M 306 410 C 330 495 345 565 352 640', w: 30 },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Portrait busts (600x750)                                             */
/* ------------------------------------------------------------------ */

function hairShape(style, fill) {
  switch (style) {
    case 'long':
      return `<path d="M 300 150 C 190 150 145 250 150 380 C 155 500 175 600 190 660 C 210 560 215 480 220 420 C 250 460 350 460 385 420 C 390 480 395 560 415 660 C 430 600 450 500 455 380 C 460 250 410 150 300 150 Z" fill="${fill}"/>`;
    case 'wavy':
      return `<path d="M 300 145 C 185 145 140 255 152 390 C 160 490 180 580 200 655 C 215 560 225 470 230 430 C 255 470 350 475 380 430 C 388 490 400 570 420 655 C 445 575 458 480 460 385 C 465 250 412 145 300 145 Z" fill="${fill}"/>
      <path d="M 200 300 C 230 340 250 360 265 372 C 240 330 230 300 228 265 Z" fill="${fill}" opacity="0.7"/>`;
    case 'bun':
      return `<circle cx="300" cy="138" r="46" fill="${fill}"/><path d="M 300 165 C 210 165 170 235 172 320 C 174 380 185 430 195 470 C 205 400 210 360 218 330 C 250 360 355 360 388 330 C 396 360 400 400 410 470 C 422 430 430 380 430 320 C 432 235 390 165 300 165 Z" fill="${fill}"/>`;
    case 'cap':
      return `<path d="M 175 240 C 175 170 230 130 300 130 C 370 130 425 170 425 240 Z" fill="${fill}"/><ellipse cx="300" cy="242" rx="150" ry="22" fill="${fill}"/><path d="M 425 235 C 480 238 505 250 510 268 C 470 258 440 254 420 252 Z" fill="${fill}"/>`;
    case 'curly':
      return `<g fill="${fill}"><circle cx="230" cy="190" r="52"/><circle cx="300" cy="155" r="58"/><circle cx="370" cy="190" r="52"/><circle cx="200" cy="255" r="44"/><circle cx="400" cy="255" r="44"/><circle cx="245" cy="160" r="40"/><circle cx="355" cy="160" r="40"/></g>`;
    case 'short':
      return `<path d="M 300 158 C 210 158 172 225 175 310 C 177 355 185 390 194 420 C 205 370 212 345 220 330 C 255 365 350 365 385 330 C 393 345 400 370 412 420 C 420 390 426 355 426 310 C 428 225 390 158 300 158 Z" fill="${fill}"/>`;
    case 'sleek':
      return `<path d="M 300 150 C 205 150 165 230 168 330 C 170 420 185 520 200 620 C 225 520 232 430 235 370 C 260 395 345 395 370 370 C 373 430 380 520 405 620 C 420 520 432 420 432 330 C 435 230 395 150 300 150 Z" fill="${fill}"/>`;
    case 'braided':
    default:
      return `<path d="M 300 150 C 205 150 168 235 170 335 C 172 400 185 450 196 500 C 208 430 215 380 220 345 C 255 380 350 380 382 345 C 388 380 395 430 408 500 C 420 450 432 400 432 335 C 434 235 395 150 300 150 Z" fill="${fill}"/><path d="M 418 420 C 445 480 450 560 440 640 C 428 580 415 530 400 490 Z" fill="${fill}"/>`;
  }
}

function bust({ hair = 'braided', skin = '#1a1512' }) {
  return `
    ${hairShape(hair, skin)}
    <path d="M 110 750 C 125 580 190 490 300 478 C 410 490 475 580 490 750 Z" fill="${skin}"/>
    <rect x="268" y="380" width="64" height="110" rx="30" fill="${skin}"/>
    <circle cx="300" cy="300" r="98" fill="${skin}"/>
  `;
}

/* ------------------------------------------------------------------ */
/* Scene helpers                                                        */
/* ------------------------------------------------------------------ */

function figure(poseName, { x = 0, y = 0, scale = 1, flip = false, color = '#100d0a', opacity = 1 } = {}) {
  const pose = POSES[poseName];
  if (!pose) return '';
  const [hx, hy, hr] = pose.head;
  const fabric = (pose.fabric ?? [])
    .map((d) => `<path d="${d}" fill="${color}" opacity="${opacity * 0.28}"/>`)
    .join('\n');
  const parts = pose.parts
    .map(
      (p) =>
        `<path d="${p.d}" fill="none" stroke="${color}" stroke-width="${p.w}" stroke-linecap="round" stroke-linejoin="round" opacity="${opacity}"/>`,
    )
    .join('\n');
  const hairExtra =
    pose.hair === 'flow'
      ? `<path d="M ${hx - hr * 0.4} ${hy - hr * 0.6} C ${hx - hr * 2.2} ${hy - hr * 0.2} ${hx - hr * 2.8} ${hy + hr * 1.4} ${hx - hr * 2.2} ${hy + hr * 2.6} C ${hx - hr * 1.6} ${hy + hr * 1.4} ${hx - hr * 0.8} ${hy + hr * 0.6} ${hx} ${hy} Z" fill="${color}" opacity="${opacity}"/>`
      : pose.hair === 'bun'
        ? `<circle cx="${hx}" cy="${hy - hr - 12}" r="${hr * 0.42}" fill="${color}" opacity="${opacity}"/>`
        : pose.hair === 'cap'
          ? `<path d="M ${hx - hr - 6} ${hy - hr * 0.35} C ${hx - hr - 6} ${hy - hr * 1.5} ${hx + hr + 6} ${hy - hr * 1.5} ${hx + hr + 6} ${hy - hr * 0.35} Z" fill="${color}" opacity="${opacity}"/><ellipse cx="${hx}" cy="${hy - hr * 0.32}" rx="${hr + 18}" ry="${hr * 0.22}" fill="${color}" opacity="${opacity}"/>`
          : '';
  return `<g transform="translate(${x} ${y}) scale(${flip ? -scale : scale} ${scale}) translate(${flip ? -600 : 0} 0)">
    ${fabric}
    ${parts}
    <circle cx="${hx}" cy="${hy}" r="${hr}" fill="${color}" opacity="${opacity}"/>
    ${hairExtra}
  </g>`;
}

function grain(id, opacity = 0.16) {
  return `
    <filter id="${id}" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="noise"/>
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer><feFuncA type="linear" slope="${opacity}"/></feComponentTransfer>
    </filter>`;
}

function beams(seedBeams, color = '#ffffff', opacity = 0.1) {
  return seedBeams
    .map(
      (b) =>
        `<g transform="translate(${b.x} ${b.y}) rotate(${b.r ?? 18})" opacity="${b.o ?? opacity}">
          <rect x="0" y="${-b.w / 2}" width="${b.len}" height="${b.w}" fill="url(#beamGrad)" rx="${b.w / 2}"/>
        </g>`,
    )
    .join('\n');
}

function svg({ w, h, defs, body }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img">
  <defs>
    <linearGradient id="beamGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${'#ffffff'}" stop-opacity="0.85"/>
      <stop offset="1" stop-color="${'#ffffff'}" stop-opacity="0"/>
    </linearGradient>
    <radialGradient id="vig" cx="0.5" cy="0.45" r="0.75">
      <stop offset="0.55" stop-color="#000000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000000" stop-opacity="1"/>
    </radialGradient>
    ${defs}
  </defs>
  ${body}
</svg>`;
}

function linGrad(id, stops, rot = { x1: 0, y1: 0, x2: 0, y2: 1 }) {
  return `<linearGradient id="${id}" x1="${rot.x1}" y1="${rot.y1}" x2="${rot.x2}" y2="${rot.y2}">${stops
    .map((s) => `<stop offset="${s[0]}" stop-color="${s[1]}"${s[2] !== undefined ? ` stop-opacity="${s[2]}"` : ''}/>`)
    .join('')}</linearGradient>`;
}

function radGrad(id, stops, center = { cx: 0.5, cy: 0.4, r: 0.7 }) {
  return `<radialGradient id="${id}" cx="${center.cx}" cy="${center.cy}" r="${center.r}">${stops
    .map((s) => `<stop offset="${s[0]}" stop-color="${s[1]}"${s[2] !== undefined ? ` stop-opacity="${s[2]}"` : ''}/>`)
    .join('')}</radialGradient>`;
}

function vignette(w, h, strength = 0.5) {
  return `<rect width="${w}" height="${h}" fill="url(#vig)" opacity="${strength}"/>`;
}

/* ------------------------------------------------------------------ */
/* Scene builders                                                       */
/* ------------------------------------------------------------------ */

function heroScene() {
  const w = 1400;
  const h = 1000;
  const defs = [
    linGrad('bg', [
      ['0', '#efe6d8'],
      ['0.55', '#e7dccb'],
      ['1', '#d9cbb6'],
    ]),
    linGrad('floor', [
      ['0', '#cbb89d', 0],
      ['1', '#b39a7a', 0.5],
    ]),
    radGrad('glow', [
      ['0', '#fff8ec', 0.9],
      ['1', '#fff8ec', 0],
    ], { cx: 0.62, cy: 0.25, r: 0.55 }),
    linGrad('cloth', [
      ['0', '#faf6ef', 0.95],
      ['1', '#e3d6c2', 0.55],
    ]),
    grain('grain', 0.14),
  ].join('\n');

  const body = `
    <rect width="${w}" height="${h}" fill="url(#bg)"/>
    <rect width="${w}" height="${h}" fill="url(#glow)"/>
    ${beams([
      { x: 180, y: 0, r: 68, w: 130, len: 1250, o: 0.35 },
      { x: 420, y: 0, r: 68, w: 70, len: 1200, o: 0.28 },
      { x: 700, y: 40, r: 72, w: 180, len: 1100, o: 0.22 },
      { x: 1050, y: 10, r: 74, w: 90, len: 1000, o: 0.2 },
    ])}
    <rect x="0" y="820" width="${w}" height="180" fill="url(#floor)"/>
    <ellipse cx="760" cy="868" rx="420" ry="46" fill="#8f7658" opacity="0.22"/>
    <path d="M 250 120 h 340 v 520 h -340 Z" fill="#ffffff" opacity="0.14"/>
    <path d="M 640 90 h 300 v 560 h -300 Z" fill="#ffffff" opacity="0.1"/>
    <path d="M 705 120 C 620 210 560 330 545 470 C 600 400 660 350 730 320 C 690 260 690 180 705 120 Z" fill="url(#cloth)"/>
    <path d="M 830 210 C 900 290 950 400 960 520 C 920 430 870 360 810 320 Z" fill="url(#cloth)" opacity="0.85"/>
    <g transform="translate(560 80) scale(0.95)">
      ${figure('leap', { color: '#14100c', opacity: 0.94 })}
    </g>
    ${vignette(w, h, 0.35)}
    <rect width="${w}" height="${h}" filter="url(#grain)"/>
  `;
  return svg({ w, h, defs, body });
}

function styleScene({ id, bgStops, pose, poseColor, glowColor, x = 60, y = 40, scale = 0.86, flip = false, beamAngle = 64 }) {
  const w = 600;
  const h = 800;
  const defs = [
    linGrad('bg', bgStops),
    radGrad('glow', [
      ['0', glowColor, 0.85],
      ['1', glowColor, 0],
    ], { cx: 0.5, cy: 0.3, r: 0.65 }),
    grain('grain', 0.18),
  ].join('\n');
  const body = `
    <rect width="${w}" height="${h}" fill="url(#bg)"/>
    <rect width="${w}" height="${h}" fill="url(#glow)"/>
    ${beams([
      { x: 60, y: -40, r: beamAngle, w: 90, len: 900, o: 0.22 },
      { x: 260, y: -60, r: beamAngle + 6, w: 50, len: 850, o: 0.16 },
    ])}
    <ellipse cx="300" cy="720" rx="220" ry="34" fill="#000000" opacity="0.28"/>
    ${figure(pose, { x, y, scale, flip, color: poseColor })}
    ${vignette(w, h, 0.45)}
    <rect width="${w}" height="${h}" filter="url(#grain)"/>
  `;
  return svg({ w, h, defs, body });
}

function eventScene({ bgStops, poses, glowColor, crowd = true }) {
  const w = 900;
  const h = 600;
  const defs = [
    linGrad('bg', bgStops),
    radGrad('glow', [
      ['0', glowColor, 0.9],
      ['1', glowColor, 0],
    ], { cx: 0.5, cy: 0.28, r: 0.7 }),
    grain('grain', 0.2),
  ].join('\n');
  const small = (name, x, y, s, flip, color, opacity) =>
    figure(name, { x, y, scale: s, flip, color, opacity });
  const body = `
    <rect width="${w}" height="${h}" fill="url(#bg)"/>
    <rect width="${w}" height="${h}" fill="url(#glow)"/>
    ${beams([
      { x: 120, y: -30, r: 78, w: 120, len: 640, o: 0.3 },
      { x: 380, y: -40, r: 86, w: 80, len: 680, o: 0.26 },
      { x: 620, y: -20, r: 96, w: 140, len: 640, o: 0.24 },
    ])}
    <ellipse cx="450" cy="520" rx="380" ry="50" fill="#000" opacity="0.35"/>
    ${poses.map((p) => small(p.pose, p.x, p.y, p.s, p.flip, p.color ?? '#0d0b09', p.o ?? 1)).join('\n')}
    ${
      crowd
        ? `<path d="M 0 600 C 60 540 120 560 160 600 Z M 140 600 C 200 520 280 530 330 600 Z M 300 600 C 360 545 430 550 480 600 Z M 450 600 C 520 515 610 530 660 600 Z M 620 600 C 680 540 760 545 810 600 Z M 780 600 C 830 555 870 560 900 600 Z" fill="#080605" opacity="0.85"/>`
        : ''
    }
    ${vignette(w, h, 0.5)}
    <rect width="${w}" height="${h}" filter="url(#grain)"/>
  `;
  return svg({ w, h, defs, body });
}

function portraitScene({ bgStops, glowColor, hair, skin = '#120f0c', tilt = 0 }) {
  const w = 600;
  const h = 750;
  const defs = [
    linGrad('bg', bgStops),
    radGrad('glow', [
      ['0', glowColor, 0.8],
      ['1', glowColor, 0],
    ], { cx: 0.42, cy: 0.3, r: 0.7 }),
    grain('grain', 0.18),
  ].join('\n');
  const body = `
    <rect width="${w}" height="${h}" fill="url(#bg)"/>
    <rect width="${w}" height="${h}" fill="url(#glow)"/>
    ${beams([
      { x: 420, y: -60, r: 100, w: 110, len: 800, o: 0.18 },
    ])}
    <g transform="rotate(${tilt} 300 430)">
      ${bust({ hair, skin })}
    </g>
    <ellipse cx="300" cy="735" rx="230" ry="40" fill="#000" opacity="0.25"/>
    ${vignette(w, h, 0.5)}
    <rect width="${w}" height="${h}" filter="url(#grain)"/>
  `;
  return svg({ w, h, defs, body });
}

function communityScene() {
  const w = 1200;
  const h = 800;
  const defs = [
    linGrad('bg', [
      ['0', '#3a2d22'],
      ['0.5', '#241b14'],
      ['1', '#12100d'],
    ]),
    radGrad('glow', [
      ['0', '#e8b27d', 0.55],
      ['1', '#e8b27d', 0],
    ], { cx: 0.5, cy: 0.3, r: 0.65 }),
    grain('grain', 0.18),
  ].join('\n');
  const body = `
    <rect width="${w}" height="${h}" fill="url(#bg)"/>
    <rect width="${w}" height="${h}" fill="url(#glow)"/>
    ${beams([
      { x: 200, y: -40, r: 80, w: 160, len: 900, o: 0.2 },
      { x: 700, y: -50, r: 95, w: 120, len: 900, o: 0.16 },
    ])}
    <g transform="translate(120 120) scale(0.72)">${figure('groupA', { color: '#0c0a08', opacity: 0.92 })}</g>
    <g transform="translate(430 90) scale(0.8)">${figure('groupA', { flip: true, color: '#0a0806', opacity: 0.95 })}</g>
    <g transform="translate(740 130) scale(0.7)">${figure('groupA', { color: '#080706', opacity: 0.9 })}</g>
    <g transform="translate(980 150) scale(0.62)" opacity="0.75">${figure('bollywood', { color: '#070605' })}</g>
    ${vignette(w, h, 0.45)}
    <rect width="${w}" height="${h}" filter="url(#grain)"/>
  `;
  return svg({ w, h, defs, body });
}

function interiorScene() {
  const w = 1200;
  const h = 800;
  const defs = [
    linGrad('bg', [
      ['0', '#22201d'],
      ['0.6', '#191715'],
      ['1', '#0f0e0c'],
    ]),
    linGrad('win', [
      ['0', '#d8c7a8', 0.5],
      ['1', '#d8c7a8', 0.05],
    ]),
    grain('grain', 0.16),
  ].join('\n');
  const body = `
    <rect width="${w}" height="${h}" fill="url(#bg)"/>
    <g opacity="0.9">
      <path d="M 90 60 h 300 v 380 h -300 Z" fill="url(#win)"/>
      <path d="M 90 60 h 300 v 380 h -300 Z" fill="none" stroke="#57493a" stroke-width="6"/>
      <line x1="240" y1="60" x2="240" y2="440" stroke="#57493a" stroke-width="6"/>
      <line x1="90" y1="250" x2="390" y2="250" stroke="#57493a" stroke-width="6"/>
    </g>
    <path d="M 60 470 h 1080" stroke="#6b5a45" stroke-width="8" stroke-linecap="round" opacity="0.8"/>
    <path d="M 150 470 v 220 M 1050 470 v 220" stroke="#4d4034" stroke-width="10" opacity="0.8"/>
    <path d="M 0 800 L 320 500 h 560 L 1200 800 Z" fill="#2b2622"/>
    <path d="M 320 500 h 560" stroke="#3d362f" stroke-width="4"/>
    <g opacity="0.35" stroke="#3d362f" stroke-width="3">
      <line x1="420" y1="500" x2="300" y2="800"/>
      <line x1="560" y1="500" x2="520" y2="800"/>
      <line x1="700" y1="500" x2="740" y2="800"/>
      <line x1="800" y1="500" x2="960" y2="800"/>
    </g>
    <g transform="translate(620 220) scale(0.62)" opacity="0.9">${figure('contemporary', { color: '#0a0908' })}</g>
    <circle cx="1020" cy="140" r="46" fill="none" stroke="#c9a06a" stroke-width="3" opacity="0.7"/>
    <text x="1020" y="150" text-anchor="middle" fill="#c9a06a" font-family="Georgia, serif" font-size="20" letter-spacing="4" opacity="0.85">RHYTHM</text>
    ${vignette(w, h, 0.5)}
    <rect width="${w}" height="${h}" filter="url(#grain)"/>
  `;
  return svg({ w, h, defs, body });
}

function widePoseScene({ bgStops, glowColor, poses, floorY = 640 }) {
  const w = 1000;
  const h = 1200;
  const defs = [
    linGrad('bg', bgStops),
    radGrad('glow', [
      ['0', glowColor, 0.7],
      ['1', glowColor, 0],
    ], { cx: 0.5, cy: 0.35, r: 0.7 }),
    grain('grain', 0.16),
  ].join('\n');
  const body = `
    <rect width="${w}" height="${h}" fill="url(#bg)"/>
    <rect width="${w}" height="${h}" fill="url(#glow)"/>
    ${beams([
      { x: 120, y: -60, r: 72, w: 150, len: 1300, o: 0.22 },
      { x: 520, y: -80, r: 80, w: 100, len: 1300, o: 0.18 },
    ])}
    <rect x="0" y="${floorY}" width="${w}" height="${h - floorY}" fill="#000" opacity="0.25"/>
    ${poses.map((p) => figure(p.pose, { x: p.x, y: p.y, scale: p.s, flip: p.flip, color: p.color ?? '#0d0b09', opacity: p.o ?? 1 })).join('\n')}
    ${vignette(w, h, 0.45)}
    <rect width="${w}" height="${h}" filter="url(#grain)"/>
  `;
  return svg({ w, h, defs, body });
}

/* ------------------------------------------------------------------ */
/* Write all images                                                     */
/* ------------------------------------------------------------------ */

const files = {
  'hero-leap.svg': heroScene(),
  'strip-styles.svg': widePoseScene({
    bgStops: [
      ['0', '#2e241c'],
      ['0.55', '#1a1511'],
      ['1', '#0d0b09'],
    ],
    glowColor: '#e8b27d',
    poses: [
      { pose: 'hiphop', x: 40, y: 300, s: 0.62 },
      { pose: 'leap', x: 380, y: 210, s: 0.72 },
      { pose: 'jazz', x: 720, y: 310, s: 0.58, flip: true },
    ],
  }),
  'style-hiphop.svg': styleScene({
    bgStops: [
      ['0', '#1d2b3a'],
      ['0.5', '#15202c'],
      ['1', '#0b1119'],
    ],
    glowColor: '#5b9fd4',
    pose: 'hiphop',
    poseColor: '#07090c',
  }),
  'style-contemporary.svg': styleScene({
    bgStops: [
      ['0', '#4a3524'],
      ['0.5', '#2c2016'],
      ['1', '#14100b'],
    ],
    glowColor: '#e0a35c',
    pose: 'contemporary',
    poseColor: '#0d0a07',
  }),
  'style-jazz.svg': styleScene({
    bgStops: [
      ['0', '#4a1418'],
      ['0.5', '#2c0d10'],
      ['1', '#140608'],
    ],
    glowColor: '#e2564a',
    pose: 'jazz',
    poseColor: '#0c0506',
  }),
  'style-ballet.svg': styleScene({
    bgStops: [
      ['0', '#d9cbb8'],
      ['0.5', '#c6b39a'],
      ['1', '#a08a70'],
    ],
    glowColor: '#fff4e2',
    pose: 'ballet',
    poseColor: '#241c14',
    beamAngle: 58,
  }),
  'style-bollywood.svg': styleScene({
    bgStops: [
      ['0', '#3c1440'],
      ['0.5', '#240c28'],
      ['1', '#120614'],
    ],
    glowColor: '#d4568f',
    pose: 'bollywood',
    poseColor: '#0c050d',
  }),
  'style-heels.svg': styleScene({
    bgStops: [
      ['0', '#3d1013'],
      ['0.5', '#23090c'],
      ['1', '#100405'],
    ],
    glowColor: '#ef6a52',
    pose: 'heels',
    poseColor: '#0b0405',
  }),
  'style-freestyle.svg': styleScene({
    bgStops: [
      ['0', '#203026'],
      ['0.5', '#13201a'],
      ['1', '#090f0c'],
    ],
    glowColor: '#6cbf8a',
    pose: 'leap',
    poseColor: '#060a08',
    flip: true,
  }),
  'event-urban-beats.svg': eventScene({
    bgStops: [
      ['0', '#57181a'],
      ['0.45', '#2c0c0e'],
      ['1', '#100405'],
    ],
    glowColor: '#ff5a45',
    poses: [
      { pose: 'hiphop', x: 180, y: 120, s: 0.62 },
      { pose: 'leap', x: 480, y: 90, s: 0.58, flip: true },
    ],
  }),
  'event-fusion-showcase.svg': eventScene({
    bgStops: [
      ['0', '#3c1a5c'],
      ['0.45', '#1f0d30'],
      ['1', '#0c0514'],
    ],
    glowColor: '#a45cff',
    poses: [
      { pose: 'contemporary', x: 170, y: 110, s: 0.6 },
      { pose: 'bollywood', x: 460, y: 100, s: 0.6, flip: true },
    ],
  }),
  'event-kids-day.svg': eventScene({
    bgStops: [
      ['0', '#6b4a12'],
      ['0.45', '#3a280a'],
      ['1', '#150f04'],
    ],
    glowColor: '#ffc466',
    poses: [
      { pose: 'jazz', x: 200, y: 150, s: 0.5 },
      { pose: 'groupA', x: 480, y: 160, s: 0.48, flip: true },
    ],
  }),
  'event-winter-intensive.svg': eventScene({
    bgStops: [
      ['0', '#14303c'],
      ['0.45', '#0b1b23'],
      ['1', '#040a0d'],
    ],
    glowColor: '#5cc8e8',
    poses: [
      { pose: 'ballet', x: 210, y: 140, s: 0.55 },
      { pose: 'contemporary', x: 500, y: 130, s: 0.52, flip: true },
    ],
  }),
  'event-choreographers-lab.svg': eventScene({
    bgStops: [
      ['0', '#13382c'],
      ['0.45', '#0a1f18'],
      ['1', '#040d0a'],
    ],
    glowColor: '#4fd49a',
    poses: [
      { pose: 'leap', x: 190, y: 100, s: 0.58 },
      { pose: 'heels', x: 500, y: 120, s: 0.52, flip: true },
    ],
  }),
  'event-anniversary-gala.svg': eventScene({
    bgStops: [
      ['0', '#4c3a12'],
      ['0.45', '#271d08'],
      ['1', '#0f0b03'],
    ],
    glowColor: '#f0c265',
    poses: [
      { pose: 'bollywood', x: 180, y: 110, s: 0.58 },
      { pose: 'jazz', x: 470, y: 120, s: 0.55, flip: true },
    ],
  }),
  'studio-community.svg': communityScene(),
  'studio-interior.svg': interiorScene(),
  'about-hero.svg': widePoseScene({
    bgStops: [
      ['0', '#4a3826'],
      ['0.5', '#241b12'],
      ['1', '#0e0b08'],
    ],
    glowColor: '#e8b27d',
    poses: [
      { pose: 'groupA', x: 30, y: 340, s: 0.55 },
      { pose: 'leap', x: 300, y: 240, s: 0.7 },
      { pose: 'contemporary', x: 640, y: 300, s: 0.6, flip: true },
    ],
  }),
  'story-detail.svg': widePoseScene({
    bgStops: [
      ['0', '#c9b494'],
      ['0.5', '#a98f6d'],
      ['1', '#6d5843'],
    ],
    glowColor: '#fff1da',
    poses: [{ pose: 'contemporary', x: 190, y: 160, s: 0.95 }],
    floorY: 900,
  }),
  'dancer-aarohi.svg': portraitScene({
    bgStops: [
      ['0', '#5c3a1e'],
      ['0.5', '#2f1d0f'],
      ['1', '#120b06'],
    ],
    glowColor: '#f0a868',
    hair: 'wavy',
  }),
  'dancer-kavin.svg': portraitScene({
    bgStops: [
      ['0', '#2c3a4a'],
      ['0.5', '#18222c'],
      ['1', '#090d12'],
    ],
    glowColor: '#7fb4d8',
    hair: 'cap',
  }),
  'dancer-isha.svg': portraitScene({
    bgStops: [
      ['0', '#4a2450'],
      ['0.5', '#27122b'],
      ['1', '#100614'],
    ],
    glowColor: '#c878d8',
    hair: 'long',
    tilt: -3,
  }),
  'dancer-rithik.svg': portraitScene({
    bgStops: [
      ['0', '#1e3c46'],
      ['0.5', '#101f26'],
      ['1', '#060b0e'],
    ],
    glowColor: '#5ec8d8',
    hair: 'curly',
  }),
  'dancer-diya.svg': portraitScene({
    bgStops: [
      ['0', '#5c2434'],
      ['0.5', '#30121c'],
      ['1', '#12060a'],
    ],
    glowColor: '#e8788c',
    hair: 'bun',
  }),
  'dancer-arjun.svg': portraitScene({
    bgStops: [
      ['0', '#4c3c18'],
      ['0.5', '#281f0c'],
      ['1', '#0f0b04'],
    ],
    glowColor: '#d8b45e',
    hair: 'short',
  }),
  'dancer-meera.svg': portraitScene({
    bgStops: [
      ['0', '#3a4a3c'],
      ['0.5', '#1f2a21'],
      ['1', '#0b0f0c'],
    ],
    glowColor: '#8cc89a',
    hair: 'sleek',
  }),
  'dancer-sana.svg': portraitScene({
    bgStops: [
      ['0', '#523818'],
      ['0.5', '#2c1e0c'],
      ['1', '#110c05'],
    ],
    glowColor: '#e0a85e',
    hair: 'braided',
  }),
  'instructor-1.svg': portraitScene({
    bgStops: [
      ['0', '#3a3230'],
      ['0.5', '#201b19'],
      ['1', '#0d0b0a'],
    ],
    glowColor: '#d8b088',
    hair: 'short',
  }),
  'instructor-2.svg': portraitScene({
    bgStops: [
      ['0', '#42303c'],
      ['0.5', '#241a20'],
      ['1', '#0e090c'],
    ],
    glowColor: '#c888a8',
    hair: 'bun',
  }),
  'instructor-3.svg': portraitScene({
    bgStops: [
      ['0', '#2c3a42'],
      ['0.5', '#182228'],
      ['1', '#080c0e'],
    ],
    glowColor: '#88b8c8',
    hair: 'cap',
  }),
  'instructor-4.svg': portraitScene({
    bgStops: [
      ['0', '#443c28'],
      ['0.5', '#262015'],
      ['1', '#0e0c08'],
    ],
    glowColor: '#d0b878',
    hair: 'wavy',
  }),
};

for (const [name, content] of Object.entries(files)) {
  writeFileSync(join(outDir, name), content.trim());
}
console.log(`Generated ${Object.keys(files).length} images in public/images`);
