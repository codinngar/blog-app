import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const CreatePostPage = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center">Create Post</h1>

            <form>
                <div className="grid grid-cols-2 gap-4 my-12">
                    <div className="w-full flex flex-col gap-2">
                        <Label htmlFor="title">Title</Label>
                        <Input type="text" id="title" placeholder="Title" />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Input
                            type="text"
                            id="description"
                            placeholder="Description"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <Label htmlFor="image-url">Image URL</Label>
                        <Input
                            type="url"
                            id="image-url"
                            placeholder="Image URL"
                        />
                    </div>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Tag" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="life">Life</SelectItem>
                            <SelectItem value="health">Health</SelectItem>
                            <SelectItem value="fitness">Fitness</SelectItem>
                            <SelectItem value="travel">Travel</SelectItem>
                            <SelectItem value="food">Food</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="career">Career</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="relationships">
                                Relationships
                            </SelectItem>
                            <SelectItem value="parenting">Parenting</SelectItem>
                            <SelectItem value="lifestyle">Lifestyle</SelectItem>
                            <SelectItem value="fashion">Fashion</SelectItem>
                            <SelectItem value="beauty">Beauty</SelectItem>
                            <SelectItem value="culture">Culture</SelectItem>
                            <SelectItem value="history">History</SelectItem>
                            <SelectItem value="philosophy">
                                Philosophy
                            </SelectItem>
                            <SelectItem value="psychology">
                                Psychology
                            </SelectItem>
                            <SelectItem value="motivation">
                                Motivation
                            </SelectItem>
                            <SelectItem value="inspiration">
                                Inspiration
                            </SelectItem>
                            <SelectItem value="self-improvement">
                                Self-Improvement
                            </SelectItem>
                            <SelectItem value="productivity">
                                Productivity
                            </SelectItem>
                            <SelectItem value="minimalism">
                                Minimalism
                            </SelectItem>
                            <SelectItem value="sustainability">
                                Sustainability
                            </SelectItem>
                            <SelectItem value="spirituality">
                                Spirituality
                            </SelectItem>
                            <SelectItem value="art">Art</SelectItem>
                            <SelectItem value="books">Books</SelectItem>
                            <SelectItem value="movies">Movies</SelectItem>
                            <SelectItem value="music">Music</SelectItem>
                            <SelectItem value="writing">Writing</SelectItem>
                            <SelectItem value="photography">
                                Photography
                            </SelectItem>
                            <SelectItem value="news">News</SelectItem>
                            <SelectItem value="opinion">Opinion</SelectItem>
                            <SelectItem value="how-to">How-To</SelectItem>
                            <SelectItem value="reviews">Reviews</SelectItem>
                            <SelectItem value="stories">Stories</SelectItem>
                            <SelectItem value="random-thoughts">
                                Random Thoughts
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Input className="w-full h-[200px]" />
                </div>
            </form>
        </div>
    );
};

export default CreatePostPage;
