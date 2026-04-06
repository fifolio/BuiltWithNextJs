import { comments } from '../data';

export async function GET(_request: Request, { params }: { params: { id: string } }) {
    const { id } = await params;
    const comment = comments.find(c => c.id === Number(id));

    return Response.json(comment);
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const { id } = await params;
    const body = await request.json();

    const { text } = body;
    const commentIndex = comments.findIndex(c => c.id === Number(id));
    comments[commentIndex].text = text;

    return Response.json(comments[commentIndex]);
}