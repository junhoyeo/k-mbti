import Hangul from 'hangul-js'

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

export const pronounceMBTI = (mbti: MBTI) => {
  const mbtiArray = mbti.split('') as MBTIArray

  const [
    ExtraversionOrIntroversion,
    SensingOrIntuition,
    ThinkingOrFeeling,
    JudgingOrPerceiving,
  ] = mbtiArray

  let result = []
  if (ExtraversionOrIntroversion ==='E') {
    result.push('ㅇ')
    result.push('ㅔ')
  } else {
    result.push('ㅇ')
    result.push('ㅣ')
  }

  if (SensingOrIntuition ==='N') {
    result.push('ㄴ')
  } else {
    result.push('ㅅ')
  }

  if (ThinkingOrFeeling ==='T') {
    result.push('ㅌ')
    result.push('ㅣ')
  } else {
    result.push('ㅍ')
    result.push('ㅣ')
  }

  if (JudgingOrPerceiving ==='P') {
    result.push('ㅂ')
  } else {
    result.push('ㅈ')
    result.push('ㅔ')
  }

  return Hangul.assemble(result)
}
