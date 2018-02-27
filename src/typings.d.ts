declare namespace fetch {
    function mockResponse(body: string, init?: RequestInit): void;
    function mockReject(err: any): void;
}