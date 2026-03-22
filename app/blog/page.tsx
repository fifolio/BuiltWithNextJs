export default async function Blog() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div>blog page</div>
  )
}
