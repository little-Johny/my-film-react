import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Clock, ThumbsUp } from "lucide-react"

export default function VMovieCard({ 
  title = "Inception",
  year = "2010",
  rating = "8.8",
  duration = "148 min",
  description = "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  posterUrl = "/placeholder.svg?height=400&width=300"
}) {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-[2/3] w-full overflow-hidden">
        <img
          src={posterUrl}
          alt={`${title} poster`}
          className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
        />
        <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
          {rating} <Star className="w-3 h-3 ml-1 fill-current" />
        </Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{year}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="w-4 h-4 mr-1" />
          {duration}
        </div>
        <Button variant="outline" size="sm">
          <ThumbsUp className="w-4 h-4 mr-2" />
          Like
        </Button>
      </CardFooter>
    </Card>
  )
}