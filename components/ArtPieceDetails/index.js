import { useRouter } from "next/router";

export default function HandleDetails({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;
}
