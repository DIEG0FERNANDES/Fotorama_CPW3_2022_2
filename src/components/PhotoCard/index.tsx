import { Photo } from '../../models/Photo'
import {
  CardContainer,
  InfoPanel,
  PhotoCreationDate,
  PhotoDescription,
  PhotoImage,
} from './styles'

type Props = {
  photo: Photo
}

const PhotoCard = ({ photo }: Props) => {
  return (
    <CardContainer>
      <PhotoImage src={photo.smallUrl} alt={photo.description} />

      <InfoPanel>
        {photo.description && (
          <PhotoDescription>
            {photo.description.length > 50
              ? `${photo.description.slice(0, 50)}(...).`
              : photo.description}
          </PhotoDescription>
        )}
        <PhotoCreationDate>
          Criada em {photo.creationDate.toLocaleDateString()}
        </PhotoCreationDate>
      </InfoPanel>
    </CardContainer>
  )
}

export default PhotoCard
