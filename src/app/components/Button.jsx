import Link from "next/link";

const PrimaryButton = ({text,url, className= ''}) => {
    return (
        <Link href={url} >
          <button className={`px-6 py-2 gradient-1 prompt-regular cursor-pointer rounded-lg border border-[#fff]/50' ${className}`}>
            {text}
          </button>
        </Link>
    )
}
export default PrimaryButton