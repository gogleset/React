import { z } from "zod";

// 입력값 유효성 처리
const JoinUser = z.object({
  id: z
    .string()
    .trim()
    .min(4, { message: "4글자 이상 적어주세요" })
    .max(20, { message: "20글자 이하로 적어주세요" })
    .regex(/^[a-z0-9_]+$/, {
      message: "알파벳 소문자, 숫자, 밑줄(**`_`**)만 사용할 수 있습니다.",
    }),
  password: z
    .string()
    .trim()
    .min(8)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/),
  email: z.string().trim().email(),
  name: z
    .string()
    .trim()
    .min(2)
    .regex(/^[A-Za-z]+$/),
  birth: z.string().datetime(),
});

// type으로 만들기
type JoinUserType = z.infer<typeof JoinUser>;

function processJoinUser(user: JoinUserType) {
  // key 타입 설정
  let key: keyof JoinUserType;

  // 유효성 검사
  for (key in user) {
    console.log(user[key]);
  }

  return JoinUser.safeParse(user);
}

export { type JoinUserType, processJoinUser };
