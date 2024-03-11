import GlobalStyle from "../styles";
import Link from "next/link";
import Image from "next/image.js";
import { useRouter } from "next/router";

import ArtPiecePreview from "./ArtPiecePreview";
import Navigation from "./Navigation";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return ();
}
/*Acceptance Criteria

 Clicking an art piece from the list shows the detail page
 The art piece image is displayed
 The art piece title is displayed
 The art piece artist is displayed
 The art piece year is displayed
 The art piece genre is displayed
 A back-button is displayed
 Clicking the back-button shows the list view

 Tasks:
 Create the component ArtPieceDetails
 ArtPieceDetails props: image, title, artist, year, genre
 Create the page pages/art-pieces/[slug] that renders ArtPieceDetails
 Read the query parameter slug from next/router
 Use the slug to find the art piece to display */