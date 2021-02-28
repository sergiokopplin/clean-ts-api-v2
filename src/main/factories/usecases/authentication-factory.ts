import { env } from '@/main/config'
import { DbAuthentication } from '@/data/usecases'
import { BcryptAdapter, JwtAdapter } from '@/infra/criptography'
import { AccountMongoRepository } from '@/infra/db'

export const makeAuthentication = (): DbAuthentication => {
  const accountMongoRepository = new AccountMongoRepository()
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(env.jtwSecret)
  return new DbAuthentication(
    accountMongoRepository,
    bcryptAdapter,
    jwtAdapter,
    accountMongoRepository
  )
}