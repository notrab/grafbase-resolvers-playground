export default function Resolver(root, args, context, info) {
//  const { email } = root

  const emailHash = crypto.createHash('md5').update('jamie@grafbase.com').digest('hex')

  return `https://www.gravatar.com/avatar/${emailHash}?d=identicon`
}
