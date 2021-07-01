export type MBTI = `${'I' | 'E'}${'S' | 'N'}${'T' | 'F'}${'J' | 'P'}`

type Split<Str extends string, Separator extends string> =
    string extends Str
      ? string[]
      : Str extends ''
        ? []
        : Str extends `${infer PartOne}${Separator}${infer PartTwo}`
          ? [PartOne, ...Split<PartTwo, Separator>]
          : [Str]

export type MBTIArray = Split<MBTI, ''>
