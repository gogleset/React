import { z } from "zod";

// validate 함수로 유효성 설정
const User = z.object({
  address: z.string(),
  password: z.string(),
  email: z.string().email().optional(), // optional option으로 값이 있든지 없든지 상관없이
  birth: z.date().optional(),
});

// 타입 설정
type UserType = z.infer<typeof User>;

function processUser(user: UserType) {
  // return User.parse(user); // 유효성 검증
  return User.safeParse(user);
}

export { User, type UserType, processUser };
