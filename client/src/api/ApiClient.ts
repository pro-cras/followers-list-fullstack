import { IUser } from "./types";

export class ApiClient {
  public async getUser(screen_name: string) {
    return await this.getRequest<IUser>(`api/user`, {
      screen_name
    });
  }

  public async getFollowers(screen_name: string) {
    return await this.getRequest<{
      total_followers: number;
      followers: IUser[];
    }>(`api/followers`, {
      screen_name
    });
  }

  private async getRequest<T = unknown>(
    // token: string | null,
    path: string,
    params?: Record<string, string>
  ): Promise<T> {
    const headers = new Headers([["Content-Type", "application/json"]]);

    const url = new URL(path, window.location.origin);

    if (params) {
      url.search = new URLSearchParams(params).toString();
    }

    const resp = await fetch(url.toString(), {
      method: "get",
      credentials: "include",
      cache: "no-cache",
      mode: "cors",
      headers
    });

    if (!resp.ok) {
      throw new Error();
    }

    if (resp.status === 204) {
      return undefined as any;
    }

    const contentType = resp.headers.get("Content-Type") || "";

    if (contentType.includes("application/json")) {
      return resp.json();
    }

    if (contentType.includes("text/plain")) {
      return resp.text() as any;
    }

    // tslint:disable-next-line:no-console
    console.warn(resp);

    throw new Error("Unexpected response type");
  }
}

export const apiClient = new ApiClient();
