import { add, subtract } from '@ebflat9/fp'

function alterAccountFunds(fn) {
  return async (state, funds) => {
    const { user } = state

    return {
      ...user,
      accounts: user.accounts.map((account) =>
        account.id === funds.id
          ? {
              ...account,
              amount: fn(account.amount, funds.amount),
            }
          : account,
      ),
    }
  }
}

const withdraw = alterAccountFunds(subtract)
const deposit = alterAccountFunds(add)

export { withdraw, deposit }
