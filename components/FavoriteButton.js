export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <Button
      type="button"
      onClick={onToggleFavorite}
      isFavorite={isFavorite}
      aria-label={isFavorite}
    ></Button>
  );
}
