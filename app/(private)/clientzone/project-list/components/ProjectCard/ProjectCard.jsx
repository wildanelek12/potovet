import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineEdit, AiFillStar } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import { FaLock, FaUnlock } from 'react-icons/fa'
import { Tooltip } from 'react-tooltip'
import { cn } from '@/utils'
import Button from '@/components/Button'
import moment from 'moment'
import { useChangeVisibilityButton, useDeleteButton } from './hooks'

export default function ProjectCard({ data }) {
	const deleteButtonProps = useDeleteButton({ id: data.id })
	const changeVisibilityButtonProps = useChangeVisibilityButton({ id: data.id, visibility: data.visibility })

	const project_cover = '/' + data.images.find(({ type }) => type === 'cover')?.image_path

	return (
		<div className="flex flex-col max-w-sm min-w-[15rem] bg-white border border-gray-200 rounded-lg shadow">
			<div className="relative w-full h-60 min-h-[15rem]">
				<Image
					className="object-cover w-full h-full rounded-t-lg"
					src={project_cover}
					alt="project-cover"
					fill
				/>

				<AiFillStar
					className={cn(
						'absolute top-2 right-3',
						data.status === 'DRAFT' && 'text-red-400',
						data.status === 'PUBLISH' && 'text-cyan-500'
					)}
					size={30}
				/>
			</div>

			<div className="flex flex-col justify-between flex-1 gap-6 p-4">
				<div className="flex flex-col gap-1">
					<h5 className="font-semibold tracking-tight text-gray-500 line-clamp-1">{data.title}</h5>
					<p
						className="text-sm font-normal text-gray-700 dark:text-gray-400 line-clamp-3"
						dangerouslySetInnerHTML={{ __html: data.overview }}
					/>
				</div>

				<div className="flex flex-col gap-3">
					<div className="flex flex-row items-center gap-4">
						{data.status === 'PUBLISH' ? (
							<Link href={`/project/${data.id}`}>
								<Button
									label="Read More"
									type="button"
									className="w-24 text-sm text-white transition-all rounded-md bg-primary hover:bg-primary/80"
								/>
							</Link>
						) : null}

						<div className="flex flex-row justify-end flex-1 gap-4">
							{data.visibility === 'PUBLIC' ? (
								<FaUnlock
									className="w-5 h-5 text-green-400 cursor-pointer"
									data-tooltip-id="my-tooltip"
									data-tooltip-content="Public"
									{...changeVisibilityButtonProps}
								/>
							) : (
								<FaLock
									className="w-5 h-5 text-red-400 cursor-pointer"
									data-tooltip-id="my-tooltip"
									data-tooltip-content="Private"
									{...changeVisibilityButtonProps}
								/>
							)}
							<Tooltip id="my-tooltip" />

							<BsFillTrashFill
								className="w-5 h-5 text-gray-400 transition-colors cursor-pointer hover:text-red-500"
								{...deleteButtonProps}
							/>

							<Link href={`/clientzone/edit-project/${data.id}`}>
								<AiOutlineEdit className="w-5 h-5 text-blue-400" />
							</Link>
						</div>
					</div>

					<p className="text-xs font-light tracking-tight text-gray-500">
						Diperbarui: {moment(data.updated_at).format('DD MMMM YYYY')}
					</p>
				</div>
			</div>
		</div>
	)
}
