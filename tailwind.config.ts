import type { Config } from "tailwindcss";
const v=(n:string)=>`var(--c-${n})`;
export default { content:["./app/**/*.tsx","./components/**/*.tsx"],
 theme:{extend:{colors:{ground:v("ground"),paper:v("paper"),ink:v("ink"),veneer:v("veneer"),cove:v("cove"),marble:v("marble")},
 fontFamily:{display:["var(--f-display)","serif"],sans:["var(--f-body)","system-ui","sans-serif"]}}},plugins:[]} satisfies Config;
